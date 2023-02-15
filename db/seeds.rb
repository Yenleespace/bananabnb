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
    created_at: DateTime.now,
    updated_at: DateTime.now,
  )

  l2 = Listing.create(
    title: "Luxurious 2BR in the Upper East Side",
    description: "Experience the epitome of luxury and comfort in this spacious 2BR apartment located in the prestigious Upper East Side neighborhood of NYC. With high-end furnishings and top-of-the-line amenities, this is the perfect place to call home during your stay in the city!",
    address: "456 Park Ave",
    state: "NY",
    city: "New York",
    zip_code: 10021,
    price: 250.0,
    host_id: 1,
    created_at: DateTime.now,
    updated_at: DateTime.now,
  )

  l3 = Listing.create(
    title: "Charming 1BR in Greenwich Village",
    description: "Escape to this charming and cozy 1BR apartment located in the heart of Greenwich Village. With its quaint streets and charming cafes, this is the perfect place to experience the true essence of NYC. Come stay and make memories that will last a lifetime!",
    address: "789 Washington St",
    state: "NY",
    city: "New York",
    zip_code: 10014,
    price: 200.0,
    host_id: 1,
    created_at: DateTime.now,
    updated_at: DateTime.now,
  )

  l4 = Listing.create(
    title: "Stylish Loft in Soho",
    description: "Come stay in this stylish and modern loft located in the heart of Soho. With its high ceilings and open-plan living space, this is the perfect place to call home during your stay in NYC. Enjoy easy access to all the best shops, restaurants, and cafes in the city!",
    address: "246 Broadway",
    state: "NY",
    city: "New York",
    zip_code: 10013,
    price: 225.0,
    host_id: 2,
    created_at: DateTime.now,
    updated_at: DateTime.now,
  )

  l5 = Listing.create(
    title: "Charming Brownstone in Brooklyn",
    description: "Escape to this charming and cozy brownstone located in the heart of Brooklyn. With its tree-lined streets and charming cafes, this is the perfect place to experience the true essence of NYC. Come stay and make memories that will last a lifetime!",
    address: "369 5th Ave",
    state: "NY",
    city: "Brooklyn",
    zip_code: 11215,
    price: 175.0,
    host_id: 2,
    created_at: DateTime.now,
    updated_at: DateTime.now
  )

  l6 = Listing.create(
    title: "Modern Apartment in Manhattan",
    description: "Enjoy a luxurious stay in this modern and stylish apartment located in the heart of Manhattan. With its breathtaking views and top-notch amenities, you'll never want to leave!",
    address: "123 Main St",
    state: "NY",
    city: "New York",
    zip_code: 11354,
    price: 250.0,
    host_id: 1,
    created_at: DateTime.now,
    updated_at: DateTime.now
  )
  
  l7 = Listing.create(
    title: "Cozy Cabin in the Woods",
    description: "Experience nature at its finest in this charming and rustic cabin nestled in the heart of the woods. With its serene surroundings and cozy interior, this is the perfect place to unwind and relax.",
    address: "456 Forest Ln",
    state: "CA",
    city: "Big Bear",
    zip_code: 92325,
    price: 150.0,
    host_id: 2,
    created_at: DateTime.now,
    updated_at: DateTime.now
  )
  
  l8 = Listing.create(
    title: "Beachfront Villa in Malibu",
    description: "Experience the ultimate beach vacation in this stunning and luxurious villa located right on the beach in Malibu. With its breathtaking ocean views and top-of-the-line amenities, this is the perfect place to escape and unwind.",
    address: "789 Ocean Ave",
    state: "CA",
    city: "Malibu",
    zip_code: 90401,
    price: 500.0,
    host_id: 1,
    created_at: DateTime.now,
    updated_at: DateTime.now
  )
  

  l1.photos.attach([
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/1.webp"), filename: "1.webp" },
    { io: URI.open("https://bananabnb-seeds.s3.amazonaws.com/2.webp"), filename: "2.webp" },
  ])

  puts "Done. Meaning, it's seeded if you SEE THIS TEXT!"
end

