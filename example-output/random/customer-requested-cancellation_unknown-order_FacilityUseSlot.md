[< Return to Summary](summary.md) | File Generated: Wed Oct 07 2020 20:35:42 GMT+0000 (Coordinated Universal Time)

# customer-requested-cancellation >> unknown-order (FacilityUseSlot)

Feature Implemented: true

Runs Order Cancellation for a non-existent Order (with a fictional UUID), expecting an UnknownOrderError error to be returned

---

✅ 1 passed with 0 failures, 0 warnings and 0 suggestions 

---


## UnknownOrderError for Customer Requested Cancellation

### U Request
PATCH https://localhost:5001/api/openbooking/orders/32559a8d-4e86-5cd3-bfeb-404b03945ac6
```json
{
  "@context": "https://openactive.io/",
  "@type": "Order",
  "orderedItem": [
    {
      "@type": "OrderItem",
      "@id": "https://localhost:5001/api/openbooking/orders/32559a8d-4e86-5cd3-bfeb-404b03945ac6#/orderedItems/1",
      "orderItemStatus": "https://openactive.io/CustomerCancelled"
    }
  ]
}
```

---

Response status code: 404 Not Found. Responded in 26.456168ms
```json
{
  "@context": "https://openactive.io/",
  "@type": "UnknownOrderError",
  "name": "The Booking System has no 'Order' matching the one requested.",
  "statusCode": 404,
  "description": "Order not found"
}
```
### Specs
* ✅ should return a(n) UnknownOrderError


