import { createReservation } from "../../store/reservations"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import { SuccessfulReservationModal } from "./ReservationModal"
import moment from 'moment'
import 'react-dates/lib/css/_datepicker.css'
import { showModal } from "../../store/ui"
import { getListingReservations } from "../../store/reservations"
import './ReservationForm.css'

export const ReservationForm = () => {
    const dispatch = useDispatch()
    const { listingId } = useParams()
    const listing = useSelector(state => state.listings[listingId])    
    const reservations = useSelector(getListingReservations(parseInt(listingId)));
    const user = useSelector(state => state.session.user)        

    let userId
    if (user) {
        userId = user.id
    } else {
        userId = null
    }

    const [startDate, setStartDate] = useState(moment())
    const [endDate, setEndDate] = useState(moment().add(1, 'day'))
    const [numGuests, setNumGuests] = useState()
    const [showMenu, setShowMenu] = useState(false)
    const [adults, setAdults] = useState(1)
    const [children, setChildren] = useState(0)
    const [errors, setErrors] = useState([])
    const [focusedInput, setFocusedInput] = useState()
    // const modal = useSelector(state => state.ui.modal)

    const openMenu = () => {
        if (showMenu) {
            return setShowMenu(false)
        } else {
            return setShowMenu(true)
        }
    }

    useEffect(() => {
        setNumGuests(adults + children)
    }, [adults, children])

    const isBlocked = (day) => {
        let mock = moment().add(6, 'days').startOf('day')
        if (day.isSame(mock)) {
            return true;
        }
        return false;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])
        
        const checkInDate = startDate
        const checkOutDate = endDate
        const reservation = { listingId, userId, numGuests, checkInDate, checkOutDate }

        return dispatch(createReservation(reservation))
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
        <form className="reservation-box" onSubmit={handleSubmit}>            
            
            <div className="reservation-info">
                <p className="price-night">${listing.price} night</p>
                <p>★ · 0 reviews · </p>
            </div>

            <div>
                <div className="reservation-date-box" style={errors.includes('Start date timeframe already taken') ? { border: '2px solid red' } : {}}>
                    <div className="date-picker-title">
                        <div>CHECK-IN</div>
                        <div className="checkout">CHECKOUT</div>
                    </div>
                    <div className="date-range-picker">

                        <DateRangePicker                            
                            startDate={startDate}
                            startDateId="start-date"
                            startDatePlaceholderText="CHECK-IN"
                            endDate={endDate}
                            endDateId="end-date"
                            endDatePlaceholderText='CHECKOUT'
                            onDatesChange={({ startDate, endDate }) => {
                                setStartDate(startDate);
                                setEndDate(endDate)
                            }}
                            focusedInput={focusedInput}
                            onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                            small={true}
                            noBorder={true}
                            hideKeyboardShortcutsPanel
                        />
                    </div>
                </div>
                <div className="guests-checkbox" onClick={openMenu}>
                    <div >
                        <div><p style={{ marginBottom: "5px" }}>Guests {!showMenu ? <i className="right-align">&#709;</i> : <i className="right-align">&#708;</i>}</p></div>
                        <div><p style={{ marginBottom: "0px" }}>{numGuests === 1 ? '1 guest' : `${numGuests} guests`}</p></div>
                    </div>
                    
                </div>

            </div>
            <ul className="error-list">
                {errors.map(error => <li key={error} style={{ color: 'red' }}>{error}</li>)}
            </ul>
            {userId === null ? <button onClick={() => dispatch(showModal())} className='reserve disabled' type="button">Reserve</button> : <button className='reserve' type="submit">Reserve</button>}
            <p className="no-charge">You wont be charged yet</p>
            <div className="general-info">
                <p className="underline">${listing.price} x {startDate & endDate ? endDate.diff(startDate, 'days') : '1'} nights</p>
                {startDate & endDate ? <p>${listing.price * endDate.diff(startDate, 'days')}</p> : <p>${listing.price}</p>}

            </div>
            
            <div className={"general-info before-taxes"} >
                <h4>Total before taxes</h4>
                {/* <h4>${Math.floor((listing.cleaningFee + (startDate & endDate ? listing.price * endDate.diff(startDate, 'days') : listing.price)) * 0.14) + (listing.cleaningFee + (startDate & endDate ? listing.price * endDate.diff(startDate, 'days') : listing.price))}</h4> */}
                <h4>{startDate & endDate ? <p>${listing.price * endDate.diff(startDate, 'days')}</p> : <p>${listing.price}</p>}</h4>
            </div>
            {showMenu && (
                <div className="dropdown-reservation" style={{ zIndex: 1 }}>
                    <div className="age">
                        <div >
                            <h5 style={{ marginBottom: "0px" }}>Adults</h5> 
                            <p>Age 13+</p>
                        </div>
                        <div className="age-button">
                            <button type="button" disabled={adults === 1} onClick={() => setAdults(adults - 1)}>-</button>
                            <h5 style={{ marginBottom: "0px" }}>{adults}</h5>
                            <button type="button" disabled={numGuests === listing.maxGuests} onClick={() => setAdults(adults + 1)}>+</button>
                        </div>
                    </div>
                    <div className="age">
                        <div>
                            <h5 style={{ marginBottom: "0px" }}>Children</h5>
                            <p>Ages 2-12</p>
                        </div>
                        <div className="age-button">
                            <button type="button" disabled={children === 0} onClick={() => setChildren(children - 1)}>-</button>
                            <h5 style={{ marginBottom: "0px" }}>{children}</h5>
                            <button type="button" disabled={numGuests === listing.maxGuests} onClick={() => setChildren(children + 1)}>+</button>
                        </div>                        
                    </div>
                    <p className="age  pointer close-button"onClick={() => setShowMenu(false)}>Close</p>                    
                </div>
            )}
        </form>
        
    )
}
