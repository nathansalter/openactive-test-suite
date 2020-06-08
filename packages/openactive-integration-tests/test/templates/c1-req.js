module.exports = data => {
  return {
    "@context": "https://openactive.io/",
    "@type": "OrderQuote",
    brokerRole: "https://openactive.io/AgentBroker",
    broker: {
      "@type": "Organization",
      name: "MyFitnessApp",
      url: "https://myfitnessapp.example.com",
      description: "A fitness app for all the community",
      logo: {
        "@type": "ImageObject",
        url: "http://data.myfitnessapp.org.uk/images/logo.png"
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Alan Peacock Way",
        addressLocality: "Village East",
        addressRegion: "Middlesbrough",
        postalCode: "TS4 3AE",
        addressCountry: "GB"
      }
    },
    seller: {
      "@type": "Organization",
      "@id": `${data.sellerId}`
    },
    orderedItem: data.orderItems.map((orderItem) => {
      return {
        "@type": "OrderItem",
        position: orderItem.position,
        acceptedOffer: {
          "@type": "Offer",
          "@id": `${orderItem.acceptedOffer['@id']}`
        },
        orderedItem: {
          "@type": `${orderItem.orderedItem['@type']}`,
          "@id": `${orderItem.orderedItem['@id']}`
        }
      };
    })
  };
};
