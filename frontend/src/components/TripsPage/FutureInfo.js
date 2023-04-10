import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { destroyReservation } from "../../store/reservations"
import { useEffect, useState } from "react"


export const FutureInfo = ({reservation}) => {
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])
    const numGuests = reservation.numGuests

    const [showMenu, setShowMenu] = useState(false)
    const [adults, setAdults] = useState(1)
    const [children, setChildren] = useState(0)
    const [totalGuests, setTotalGuests] = useState()

    const dateFormat = (start, end) => {
        const startSplit = start.split('-')
        const endSplit = end.split("-")
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

        return (
            <div className='future-date'>
                <p>{parseInt(startSplit[2])} - {parseInt(endSplit[2])}</p>
                {startSplit[1] === endSplit[1] ? <p>{month[parseInt(startSplit[1]) - 1]}</p> : <p>{month[parseInt(startSplit[1]) - 1]} - {month[parseInt(endSplit[1]) - 1]}</p>}
                {startSplit[0] === endSplit[0] ? <p>{startSplit[0]}</p> : <p>{startSplit[0]} - {endSplit[0]}</p>}
            </div>
        )
    }

    useEffect(() => {
        setTotalGuests(adults + children)
    }, [adults, children])

    const openMenu = () => {
        if (showMenu) {
            return setShowMenu(false)
        } else {
            return setShowMenu(true)
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        setErrors([])

        dispatch(destroyReservation(reservation.id))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json()
                } catch {
                    data = await res.text()
                }
                if (data?.errors) setErrors(data.errors)
                else if (data) setErrors([data])
                else setErrors([res.statusText])
            })
    }


    return (
        <div >
            <div className="future-trip">
                <div className="future-trips-left">
                    <Link to={`/listings/${reservation.listingId}`} style={{ textDecoration: 'none' }}>
                        <div className="future-top">
                            <h4>{reservation.listingCity}</h4>
                            <p>{reservation.listingPropertyType} hosted by {reservation.listingOwner}</p>
                        </div>
                    </Link>
                    <div className="future-bottom">
                        <Link to={`/listings/${reservation.listingId}`} style={{ textDecoration: 'none' }}>
                            {dateFormat(reservation.checkInDate, reservation.checkOutDate)}
                        </Link>
                         
                        <div className="reservation-buttons">
                        {reservation.checkOutDate >= new Date().toISOString().split('T')[0] &&<button className="delete-btn" onClick={handleClick}>Cancel reservation</button>}
                        {reservation.checkOutDate < new Date().toISOString().split('T')[0] &&<button className="delete-btn" style={{textDecoration: 'none'}}>Trip completed</button>}
                        </div>
                        
                        
                        
                    </div>
                    {showMenu}
                </div>
                <div class="image-container">
                <Link to={`/listings/${reservation.listingId}`}>
                    <div >
                        <img alt="listing" className={"future-trips-right no-show"} src={reservation.imgUrls[0]}></img>
                    </div>
                </Link>
                </div>
                
                
            </div>
        </div>
    )


}