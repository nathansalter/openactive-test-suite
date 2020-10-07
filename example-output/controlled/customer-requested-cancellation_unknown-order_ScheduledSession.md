[< Return to Summary](summary.md) | File Generated: Wed Oct 07 2020 20:37:25 GMT+0000 (Coordinated Universal Time)

# customer-requested-cancellation >> unknown-order (ScheduledSession)

Feature Implemented: true

Runs Order Cancellation for a non-existent Order (with a fictional UUID), expecting an UnknownOrderError error to be returned

---

✅ 1 passed with 0 failures, 0 warnings and 0 suggestions 

---


## UnknownOrderError for Customer Requested Cancellation

### U Request
PATCH https://localhost:5001/api/openbooking/orders/07397a0a-b844-5737-a19f-91b898db350a
```json
{
  "@context": "https://openactive.io/",
  "@type": "Order",
  "orderedItem": [
    {
      "@type": "OrderItem",
      "@id": "https://localhost:5001/api/openbooking/orders/07397a0a-b844-5737-a19f-91b898db350a#/orderedItems/1",
      "orderItemStatus": "https://openactive.io/CustomerCancelled"
    }
  ]
}
```

---

Response status code: 404 Not Found. Responded in 110.581773ms
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


