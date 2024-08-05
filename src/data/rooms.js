const rooms = [
  {
    id: 1,
    name: "Cozy Apartment in Seoul",
    country: "한국",
    rating: 4.5,
    photos: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
    is_owner: true,
    pk: 1,
    city: "서울",
    price: 100000,
    rooms: 2,
    toilets: 1,
    description: "A cozy apartment located in the heart of Seoul.",
    address: "123 Seoul St, Seoul, Korea",
    pet_friendly: true,
    kind: "entire_place",
    owner_id: 1,
    amenities: [1, 2],
    category_id: 1,
    created: 0,
    updated: 0,
  },
  {
    id: 2,
    name: "Private Room in Gangnam",
    country: "한국",
    rating: 4.5,
    photos: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
    is_owner: true,
    pk: 1,
    city: "서울",
    price: 80000,
    rooms: 1,
    toilets: 1,
    description: "A private room in a luxurious apartment in Gangnam.",
    address: "456 Gangnam St, Seoul, Korea",
    pet_friendly: false,
    kind: "private_room",
    owner_id: 2,
    amenities: [1, 3],
    category_id: 1,
    created: 0,
    updated: 0,
  },
  {
    id: 3,
    name: "Shared Room near Han River",
    country: "한국",
    rating: 4.5,
    photos: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
    is_owner: true,
    pk: 1,
    city: "서울",
    price: 50000,
    rooms: 1,
    toilets: 1,
    description: "A shared room with a stunning view of Han River.",
    address: "789 Han River St, Seoul, Korea",
    pet_friendly: true,
    kind: "shared_room",
    owner_id: 1,
    amenities: [2, 3],
    category_id: 2,
    created: 0,
    updated: 0,
  },
];

export default rooms;