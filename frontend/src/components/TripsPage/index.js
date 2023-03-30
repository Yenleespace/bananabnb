import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchUsersReservations } from "../../store/reservations"
import './TripsPage.css'
import { FutureInfo } from "./FutureInfo"

export const TripsPage = () => {
    
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    const getReservations = (state) => {
        return state.reservations ? Object.values(state.reservations) : []
    } 
    let reservations = useSelector(getReservations)
    
    useEffect(() => {
        dispatch(fetchUsersReservations(user.id))
    }, [])
    
    
    

    const sort = () => {
        const future = []
        const past = []
        

        reservations.forEach(reservation => {

            if (reservation.checkOutDate >= new Date().toISOString().split('T')[0]) {
                future.push(<FutureInfo key={reservation.id} reservation={reservation}></FutureInfo>)
            } else{
                past.push(<FutureInfo key={reservation.id} reservation={reservation}></FutureInfo>)
            }
            
        })
        
        

        return (
            <>
            <div id="trips-container">
                <h5>Upcoming Trips</h5>
                <div id='future-container'>
                    {future.length === 0 ? blank() : future}
                </div>               
            </div>
            <br></br>
            <br></br>
            <div id="trips-container">
                <h5>Past Trips</h5>
                 <div id='future-container'>
                    {past.length === 0 ? blank() : past}
                </div>            
            </div>
            </>
        )
    }


    const blank = () => {
        return (
            <div className='trip'>
                <div className='trips-left'>
                    <h4>No trips booked...yet!</h4>
                    <p>Time to dust off your bags and start planning your next adventure</p>
                    <Link to='/'>
                        <button className="start-btn">Start searching</button>
                    </Link>
                </div>
                
                
            </div>
        )
    }
    
    return (
        <div id="trips">
            <h2>Trips</h2>
            {sort()}
        </div>
    )
}