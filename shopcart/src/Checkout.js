export const Checkout = ({ fbPic, fbData }) => (<>
    <img src={fbPic} alt="fb pic" />
    <h3 className="d-inline text-success mx-2">Welcome back {fbData.name}!</h3>
    <p className="my-5">Time to checkout?</p>
</>)