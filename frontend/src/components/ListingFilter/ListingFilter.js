import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchListings } from "../../store/listings"
import { fetchListingsType } from "../../store/listings"
import './ListingFilter.css'

const ListingFilter = () => {
  const dispatch = useDispatch()
  const [filtered, setFiltered] = useState('all')

  return (
    <div className="listing-bar">
      <div className="filter-icon" onClick={() => {dispatch(fetchListings()); setFiltered('all')}} style={filtered === 'all' ? { borderBottom: '2px solid #222222'} : {}}>
        <img src="https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg" alt="" />
        <p>All</p>
      </div>
      <div className="filter-icon" onClick={() => {dispatch(fetchListingsType('Trending')); setFiltered('Trending')}} style={filtered === 'Trending' ? { borderBottom: '2px solid #222222'} : {}}>
        <img src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg" alt="" />
        <p>Trending</p>
      </div>
      <div className="filter-icon" onClick={() => {dispatch(fetchListingsType('Amazing')); setFiltered('Amazing')}} style={filtered === 'Amazing' ? { borderBottom: '2px solid #222222'} : {}} >
        <img src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="" />
        <p>Amazing views</p>
      </div>
      <div className="filter-icon" onClick={() => {dispatch(fetchListingsType('Beachfront')); setFiltered('Beachfront')}} style={filtered === 'Beachfront' ? { borderBottom: '2px solid #222222'} : {}}>
        <img src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" alt="" />
        <p>Beachfront</p>
      </div>
      <div className="filter-icon" onClick={() => {dispatch(fetchListingsType('Luxe')); setFiltered('Luxe')}} style={filtered === 'Luxe' ? { borderBottom: '2px solid #222222'} : {}}>
        <img src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg" alt="" />
        <p>Luxe</p>
      </div>
    </div>
  )
}

export default ListingFilter;
