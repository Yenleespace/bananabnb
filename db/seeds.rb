# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "open-uri"


ApplicationRecord.transaction do
  puts "Destroying tables..."
  Listing.destroy_all
  User.destroy_all

  ApplicationRecord.connection.reset_pk_sequence!("users")
  ApplicationRecord.connection.reset_pk_sequence!("listings")

  User.create(
    first_name: "Test",
    last_name: "Kim",
    email: "user@gmail.com",
    password: "123456",
  )

  User.create(
    first_name: "yen",
    last_name: "lee",
    email: "test@gmail.com",
    password: "123456",
  )

  puts "first"
  l1 = Listing.create(
    title: "Stylish Studio in the Heart of Manhattan",
    description: "Come stay in this cozy and modern studio located in the heart of Manhattan. Perfect for solo travelers or couples, this studio is equipped with all the essentials you need for a comfortable stay. Enjoy easy access to all the best sights and sounds that NYC has to offer!",
    address: "123 Main St",
    state: "NY",
    city: "New York",
    zip_code: 10001,
    price: 150.0,
    host_id: 1,
    filter: "Trending",
    created_at: DateTime.now,
    updated_at: DateTime.now,
  )

  l1.photos.attach([
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/1.webp"), filename: "1.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/2.webp"), filename: "2.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/3.webp"), filename: "3.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/4.webp"), filename: "4.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/5.webp"), filename: "5.webp" },
  ])

  l2 = Listing.create(
    title: "Luxurious 2BR in the Upper East Side",
    description: "Experience the epitome of luxury and comfort in this spacious 2BR apartment located in the prestigious Upper East Side neighborhood of NYC. With high-end furnishings and top-of-the-line amenities, this is the perfect place to call home during your stay in the city!",
    address: "456 Park Ave",
    state: "NY",
    city: "New York",
    zip_code: 10021,
    price: 250.0,
    host_id: 1,
    filter: "Amazing Luxe",
    created_at: DateTime.now,
    updated_at: DateTime.now,
  )

  l2.photos.attach([
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l2/1.webp"), filename: "1.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l2/2.webp"), filename: "2.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l2/3.webp"), filename: "3.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l2/4.webp"), filename: "4.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l2/5.webp"), filename: "5.webp" },
  ])

  l3 = Listing.create(
    title: "Charming 1BR in Greenwich Village",
    description: "Escape to this charming and cozy 1BR apartment located in the heart of Greenwich Village. With its quaint streets and charming cafes, this is the perfect place to experience the true essence of NYC. Come stay and make memories that will last a lifetime!",
    address: "789 Washington St",
    state: "NY",
    city: "New York",
    zip_code: 10014,
    price: 200.0,
    host_id: 1,
    filter: "Trending",
    created_at: DateTime.now,
    updated_at: DateTime.now,
  )

  l3.photos.attach([
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l3/1.webp"), filename: "1.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l3/2.webp"), filename: "2.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l3/3.webp"), filename: "3.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l3/4.webp"), filename: "4.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l3/5.webp"), filename: "5.webp" },
  ])

  l4 = Listing.create(
    title: "Stylish Loft in Soho",
    description: "Come stay in this stylish and modern loft located in the heart of Soho. With its high ceilings and open-plan living space, this is the perfect place to call home during your stay in NYC. Enjoy easy access to all the best shops, restaurants, and cafes in the city!",
    address: "246 Broadway",
    state: "NY",
    city: "New York",
    zip_code: 10013,
    price: 225.0,
    host_id: 2,
    filter: "Trending Amazing",
    created_at: DateTime.now,
    updated_at: DateTime.now,
  )

  l4.photos.attach([
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l4/1.webp"), filename: "1.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l4/2.webp"), filename: "2.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l4/3.webp"), filename: "3.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l4/4.webp"), filename: "4.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l4/5.webp"), filename: "5.webp" },
  ])

  l5 = Listing.create(
    title: "Charming Brownstone in Brooklyn",
    description: "Escape to this charming and cozy brownstone located in the heart of Brooklyn. With its tree-lined streets and charming cafes, this is the perfect place to experience the true essence of NYC. Come stay and make memories that will last a lifetime!",
    address: "369 5th Ave",
    state: "NY",
    city: "Brooklyn",
    zip_code: 11215,
    price: 175.0,
    host_id: 2,
    filter: "Luxe",
    created_at: DateTime.now,
    updated_at: DateTime.now
  )

  l5.photos.attach([
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l5/5.webp"), filename: "5.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l5/4.webp"), filename: "4.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l5/3.webp"), filename: "3.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l5/2.webp"), filename: "2.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l5/1.webp"), filename: "1.webp" },
  ])

  l6 = Listing.create(
    title: "Modern Apartment in Manhattan",
    description: "Enjoy a luxurious stay in this modern and stylish apartment located in the heart of Manhattan. With its breathtaking views and top-notch amenities, you'll never want to leave!",
    address: "123 Main St",
    state: "NY",
    city: "New York",
    zip_code: 11354,
    price: 250.0,
    host_id: 1,
    filter: "Amazing",
    created_at: DateTime.now,
    updated_at: DateTime.now
  )

  l6.photos.attach([
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l6/1.webp"), filename: "1.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l6/2.webp"), filename: "2.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l6/3.webp"), filename: "3.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l6/4.webp"), filename: "4.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l6/5.webp"), filename: "5.webp" },
  ])
  
  l7 = Listing.create(
    title: "Cozy Cabin in the Woods",
    description: "Experience nature at its finest in this charming and rustic cabin nestled in the heart of the woods. With its serene surroundings and cozy interior, this is the perfect place to unwind and relax.",
    address: "456 Forest Ln",
    state: "CA",
    city: "Big Bear",
    zip_code: 92325,
    price: 150.0,
    host_id: 2,
    filter: "Amazing",
    created_at: DateTime.now,
    updated_at: DateTime.now
  )
  
  l7.photos.attach([
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l7/1.webp"), filename: "1.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l7/2.webp"), filename: "2.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l7/3.webp"), filename: "3.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l7/4.webp"), filename: "4.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l7/5.webp"), filename: "5.webp" },
  ])

  l8 = Listing.create(
    title: "Beachfront Villa in Malibu",
    description: "Experience the ultimate beach vacation in this stunning and luxurious villa located right on the beach in Malibu. With its breathtaking ocean views and top-of-the-line amenities, this is the perfect place to escape and unwind.",
    address: "789 Ocean Ave",
    state: "CA",
    city: "Malibu",
    zip_code: 90401,
    price: 500.0,
    host_id: 1,
    filter: "Beachfront Luxe",
    created_at: DateTime.now,
    updated_at: DateTime.now
  )

  l8.photos.attach([
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l8/1.webp"), filename: "1.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l8/2.webp"), filename: "2.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l8/3.webp"), filename: "3.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l8/4.webp"), filename: "4.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l8/5.webp"), filename: "5.webp" },
  ])

  l9 = Listing.create(
    title: "Luxury Condo in Downtown San Diego",
    description: "Experience the height of luxury in this sleek and modern condo located in the heart of downtown San Diego. With stunning views of the city and top-of-the-line amenities, this is the perfect place to relax and unwind.",
    address: "789 5th Avenue",
    state: "CA",
    city: "San Diego",
    zip_code: 92101,
    price: 600.0,
    host_id: 1,
    filter: "Beachfront Amazing Luxe",
    created_at: DateTime.now,
    updated_at: DateTime.now
  )

  l9.photos.attach([
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l9/1.webp"), filename: "1.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l9/2.webp"), filename: "2.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l9/3.webp"), filename: "3.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l9/4.webp"), filename: "4.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l9/5.webp"), filename: "5.webp" },
  ])

  l10 = Listing.create(
    title: "Spacious Loft in San Francisco",
    description: "Live like a true San Franciscan in this stylish and spacious loft. With its open floor plan and industrial chic design, you'll be able to fully immerse yourself in the city's vibrant and creative culture.",
    address: "123 Mission Street",
    state: "CA",
    city: "San Francisco",
    zip_code: 94105,
    price: 400.0,
    host_id: 2,
    filter: "Trending",
    created_at: DateTime.now,
    updated_at: DateTime.now
  )

  l10.photos.attach([
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l10/1.webp"), filename: "1.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l10/2.webp"), filename: "2.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l10/3.webp"), filename: "3.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l10/4.webp"), filename: "4.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l10/5.webp"), filename: "5.webp" },
  ])

  l11 = Listing.create(
    title: "Modern Apartment in the City",
    description: "Experience city living at its finest in this sleek and stylish apartment. With its prime location in the heart of downtown, you'll be just steps away from the best restaurants, bars, and entertainment.",
    address: "456 Elm Street",
    state: "IL",
    city: "Chicago",
    zip_code: 60611,
    price: 300.0,
    host_id: 1,
    filter: "Trending",
    created_at: DateTime.now,
    updated_at: DateTime.now
  )

  l11.photos.attach([
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l11/1.webp"), filename: "1.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l11/2.webp"), filename: "2.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l11/3.webp"), filename: "3.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l11/4.webp"), filename: "4.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l11/5.webp"), filename: "5.webp" },
  ])

  l12 = Listing.create(
    title: "Oceanfront Home in La Jolla",
    description: "Experience the ultimate beach vacation in this stunning and luxurious home located right on the ocean in La Jolla. With its breathtaking views of the Pacific and its private beach access, you'll have everything you need for the perfect getaway.",
    address: "123 Ocean Boulevard",
    state: "CA",
    city: "San Diego",
    zip_code: 92037,
    price: 900.0,
    host_id: 2,
    filter: "Beachfront",
    created_at: DateTime.now,
    updated_at: DateTime.now
  )

  l12.photos.attach([
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l12/1.webp"), filename: "1.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l12/2.webp"), filename: "2.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l12/3.webp"), filename: "3.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l12/4.webp"), filename: "4.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l12/5.webp"), filename: "5.webp" },
  ])

  l13 = Listing.create(
    title: "Coastal Cabin in Maine",
    description: "Experience the charm of New England in this rustic and cozy coastal cabin. With its stunning ocean views and access to the beach, you'll have the perfect opportunity to relax and soak up the beauty of the Maine coastline.",
    address: "789 Beach Road",
    state: "ME",
    city: "Portland",
    zip_code: 04101,
    price: 200.0,
    host_id: 1,
    filter: "Trending",
    created_at: DateTime.now,
    updated_at: DateTime.now
  )

  l13.photos.attach([
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l13/1.webp"), filename: "1.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l13/2.webp"), filename: "2.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l13/3.webp"), filename: "3.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l13/4.webp"), filename: "4.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l13/5.webp"), filename: "5.webp" },
  ])

  l14 = Listing.create(
    title: "Cozy Cottage in Pacific Beach",
    description: "Escape to the beach in this charming and cozy cottage located in the heart of Pacific Beach. With its laid-back and casual atmosphere, you'll feel right at home in this beach community.",
    address: "456 Garnet Avenue",
    state: "CA",
    city: "San Diego",
    zip_code: 92109,
    price: 200.0,
    host_id: 2,
    filter: "Beachfront",
    created_at: DateTime.now,
    updated_at: DateTime.now
  )

  l14.photos.attach([
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l14/1.webp"), filename: "1.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l14/2.webp"), filename: "2.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l14/3.webp"), filename: "3.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l14/4.webp"), filename: "4.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/l14/5.webp"), filename: "5.webp" },
  ])

    Review.create(
      user_id: 1,
      listing_id: 6,
      review:"I had a great time staying at this listing. The location was perfect for my needs, and the price was very reasonable. The host was very friendly and helpful, and the listing was clean and comfortable. I would definitely stay here again.",
      rating: 4.5
    )

    Review.create(
      user_id: 2,
      listing_id: 6,
      review:"I really enjoyed my stay at this listing. The location was ideal, and the listing was clean and well-maintained. The host was very accommodating and provided excellent service. The only downside was the noise from the street, but overall, it was a great experience.",
      rating: 4.0
    )





  puts "Done. Meaning, it's seeded if you SEE THIS TEXT!"
end

