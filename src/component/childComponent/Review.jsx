import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import profilePlaceholder from "../../assets/profile.png";
import { FcRating } from "react-icons/fc";
import { MdChatBubbleOutline, MdRateReview } from "react-icons/md";

const Review = ({ id, user, reviewLoad }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://hero-home-neon.vercel.app/Service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      });
  }, [id]);

  const handleReview = async (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value || 5;
    const comment = form.comment.value;

    const newReview = {
      name: user.displayName || "Anonymous User",
      photo: user.photoURL || profilePlaceholder,
      email: user.email,
      rating: parseFloat(rating),
      comment,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(`https://hero-home-neon.vercel.app/Service/${id}/review`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newReview),
      });

      if (res.ok) {
        toast.success("Thank you for your feedback!");
        setReviews((prev) => [newReview, ...prev]); // Show new review at the top
        reviewLoad(); // Sync parent state (like average rating)
        form.reset();
      }
    } catch (err) {
      toast.error("Failed to submit review");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center p-10">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <Toaster />

      {/* --- Review List Section --- */}
      <section className="mt-10">
        <div className="flex items-center gap-2 mb-6">
          <MdChatBubbleOutline className="text-2xl text-primary" />
          <h2 className="text-2xl font-bold text-base-content">Customer Reviews</h2>
          <span className="badge badge-secondary">{reviews.length}</span>
        </div>

        {reviews.length > 0 ? (
          <div className="grid gap-4">
            {reviews.map((client, index) => (
              <div 
                key={index} 
                className="bg-base-200 p-5 rounded-2xl border border-base-300 shadow-sm transition-hover hover:shadow-md"
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full border-2 border-primary/20 object-cover"
                      src={client.photo || profilePlaceholder}
                      alt={client.name}
                    />
                    <div>
                      <h4 className="font-bold text-base-content flex items-center gap-2">
                        {client.name}
                        <span className="flex items-center text-sm font-normal opacity-70 ml-2">
                          <FcRating className="mr-1" /> {client.rating}/5
                        </span>
                      </h4>
                      <p className="text-base-content/80 mt-1 italic">"{client.comment}"</p>
                    </div>
                  </div>
                  <span className="text-[10px] opacity-50 font-medium">
                    {new Date(client.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-base-200 rounded-3xl border-2 border-dashed border-base-300">
            <p className="opacity-50">No reviews yet. Be the first to share your experience!</p>
          </div>
        )}
      </section>

      {/* --- Add Review Form --- */}
      {user ? (
        <section className="bg-primary/5 p-6 md:p-8 rounded-3xl border border-primary/10">
          <div className="flex items-center gap-2 mb-6">
            <MdRateReview className="text-2xl text-primary" />
            <h3 className="text-xl font-bold">Leave a Review</h3>
          </div>

          <form onSubmit={handleReview} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* User Identity (Read Only) */}
              <div className="form-control">
                <label className="label text-xs font-bold uppercase opacity-60">Posting as</label>
                <input
                  type="text"
                  value={user?.displayName}
                  readOnly
                  className="input input-bordered bg-base-200 font-semibold"
                />
              </div>

              {/* Rating Selector */}
              <div className="form-control">
                <label className="label text-xs font-bold uppercase opacity-60">Your Rating</label>
                <div className="rating rating-lg gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <input
                      key={n}
                      type="radio"
                      name="rating"
                      value={n}
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked={n === 5}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label text-xs font-bold uppercase opacity-60">Comment</label>
              <textarea
                name="comment"
                required
                placeholder="How was the service? Your feedback helps others choose better."
                className="textarea textarea-bordered h-28 focus:border-primary text-base"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button 
                className="btn btn-primary px-10 rounded-xl shadow-lg shadow-primary/20" 
                type="submit"
              >
                Post Review
              </button>
            </div>
          </form>
        </section>
      ) : (
        <div className="alert bg-base-200 border-base-300">
          <span>Please login to leave a review.</span>
        </div>
      )}
    </div>
  );
};

export default Review;