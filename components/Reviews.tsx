import React, { useState } from 'react';
import { Star, StarHalf, User } from 'lucide-react';
import { INITIAL_REVIEWS } from '../constants';
import { Review } from '../types';

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const review: Review = {
      id: Date.now(),
      name: newReview.name,
      rating: Number(newReview.rating),
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };
    setReviews([review, ...reviews]);
    setNewReview({ name: '', rating: 5, comment: '' });
  };

  return (
    <section id="reviews" className="py-20 bg-chocolate text-cream">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Review List */}
          <div>
            <h2 className="font-serif text-4xl font-bold mb-8">Customer Love</h2>
            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-soft-pink text-chocolate flex items-center justify-center font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-cream">{review.name}</h4>
                        <span className="text-xs text-cream/50">{review.date}</span>
                      </div>
                    </div>
                    <div className="flex gap-1 text-soft-pink">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'opacity-20'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-cream/80 font-sans italic">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Add Review Form */}
          <div className="bg-white text-chocolate p-8 rounded-2xl shadow-xl">
            <h3 className="font-serif text-2xl font-bold mb-6">Share Your Experience</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-warm-white border border-chocolate/20 rounded-lg p-3 focus:outline-none focus:border-soft-pink"
                  value={newReview.name}
                  onChange={e => setNewReview({...newReview, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2">Rating</label>
                <div className="flex gap-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({...newReview, rating: star})}
                      className={`text-2xl transition-transform hover:scale-125 ${newReview.rating >= star ? 'text-chocolate' : 'text-gray-300'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Comment</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-warm-white border border-chocolate/20 rounded-lg p-3 focus:outline-none focus:border-soft-pink"
                  value={newReview.comment}
                  onChange={e => setNewReview({...newReview, comment: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-chocolate text-cream font-bold py-3 rounded-lg hover:bg-soft-pink hover:text-chocolate transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;