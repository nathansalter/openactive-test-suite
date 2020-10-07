[< Return to Summary](summary.md) | File Generated: Wed Oct 07 2020 20:35:42 GMT+0000 (Coordinated Universal Time)

# customer-requested-cancellation >> unknown-order (ScheduledSession)

Feature Implemented: true

Runs Order Cancellation for a non-existent Order (with a fictional UUID), expecting an UnknownOrderError error to be returned

---

✅ 1 passed with 0 failures, 0 warnings and 0 suggestions 

---


## UnknownOrderError for Customer Requested Cancellation

### U Request
PATCH https://localhost:5001/api/openbooking/orders/a4218d89-dac5-51c2-aa27-2036579b2433
```json
{
  "@context": "https://openactive.io/",
  "@type": "Order",
  "orderedItem": [
    {
      "@type": "OrderItem",
      "@id": "https://localhost:5001/api/openbooking/orders/a4218d89-dac5-51c2-aa27-2036579b2433#/orderedItems/1",
      "orderItemStatus": "https://openactive.io/CustomerCancelled"
    }
  ]
}
```

---

Response status code: 404 Not Found. Responded in 187.965357ms
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


