'use client';

import React, { useState } from 'react';
import { useSellerViewModel } from '../view_model/useSellerViewModel';
import { Input, Button, Card } from '@/shared/components';

export const AddPetForm: React.FC = () => {
  const { createListing, loading, error } = useSellerViewModel();
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    type: 'dog',
    age: '',
    price: '',
    image: '',
    description: '',
    location: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createListing({
        ...formData,
        age: parseInt(formData.age),
        price: parseInt(formData.price),
      });
      setSuccess(true);
      setFormData({
        name: '',
        breed: '',
        type: 'dog',
        age: '',
        price: '',
        image: '',
        description: '',
        location: '',
      });
      setTimeout(() => {
        window.location.href = '/seller/my-pets';
      }, 1500);
    } catch (err) {
      // Error is handled by the hook
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New Pet Listing</h1>

      {success && (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg mb-6">
          Pet listing created successfully! Redirecting...
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Pet Name"
            placeholder="e.g., Golden Buddy"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Breed"
            placeholder="e.g., Golden Retriever"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Pet Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="other">Other</option>
            </select>
          </div>
          <Input
            label="Age (years)"
            type="number"
            placeholder="2"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <Input
            label="Price (₹)"
            type="number"
            placeholder="25000"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <Input
          label="Image URL"
          placeholder="https://..."
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <Input
          label="Location"
          placeholder="City, State"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            placeholder="Tell us about your pet..."
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex gap-4 pt-6">
          <Button type="submit" disabled={loading} size="lg" className="flex-1">
            {loading ? 'Creating...' : 'Create Listing'}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={() => window.history.back()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
};
