import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchListings } from "../../store/listings";
import ListingList from './ListingList'
import ListingFilter from "../ListingFilter/ListingFilter";
import './ListingIndex.css'

function ListingIndexPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const listings = useSelector(state => Object.values(state.listings));

  useEffect(() => {
    dispatch(fetchListings())    
  }, [dispatch]);

  return (        
    <div className="listing-list-container">      
      <ListingFilter />
      <ListingList listings={listings} />
    </div>
    
  );
}

export default ListingIndexPage;
