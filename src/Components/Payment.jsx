

const Payment = () => {
  const makePayment = () => {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxxx-X",
      tx_ref: "txn-" + Date.now(),
      amount: 100,
      currency: "RWF",
      payment_options: "mobilemoneyrwanda,",
      customer: {
        email: "manishimweisabella@gmail.com",
        phonenumber: "250793679835",
        name: "isabella",
      },
      callback: (response) => {
        console.log("Payment callback:", response);
      },
      customizations: {
        title: "Online Payment",
        description: "Payment of services",
        logo: "/Image/logo.png",
      },
    });
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold">Payment Cards</h2>
      <button
        onClick={makePayment}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
