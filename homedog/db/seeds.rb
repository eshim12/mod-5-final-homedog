# users
elli = User.create(username: "elli", full_name: "elli shim", password: "123", email: "ellishim@gmail.com", description: "a good host and good with dogs")
sue = User.create(username: "sue", full_name: "sue shim", password: "123", email: "ellishim@gmail.com", description: "a good host and good with dogs")
jay = User.create(username: "jay", full_name: "jay shim", password: "123", email: "ellishim@gmail.com", description: "a good host and good with dogs")
cora = User.create(username: "cora", full_name: "cora shim", password: "123", email: "ellishim@gmail.com", description: "a good host and good with dogs")

# pets
coco = Pet.create(name: "coco", pet_owner: elli, description: "great dog")
nacho = Pet.create(name: "nacho", pet_owner: cora, description: "great dog")
hunter = Pet.create(name: "hunter", pet_owner: sue, description: "great dog")
tyler = Pet.create(name: "tyler", pet_owner: jay, description: "great dog")

# reservations
reservation1 = Reservation.create(host: elli, pet_owner: cora, start_date: "2018-11-14", end_date: "2018-11-20")
reservation2 = Reservation.create(host: sue, pet_owner: elli, start_date: "2018-03-14", end_date: "2018-03-20")

# reviews
review1 = Review.create(reservation: reservation1, content: "great dog host")
review2 = Review.create(reservation: reservation2, content: "decent dog host")
