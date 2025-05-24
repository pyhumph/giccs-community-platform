import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const PersonalInfoForm = ({ onNext, onPrev, onUpdate, data }) => {
  const [formData, setFormData] = useState({
    firstName: data.personalInfo?.firstName || "",
    lastName: data.personalInfo?.lastName || "",
    email: data.personalInfo?.email || "",
    phone: data.personalInfo?.phone || "",
    dateOfBirth: data.personalInfo?.dateOfBirth || "",
    gender: data.personalInfo?.gender || "",
    address: data.personalInfo?.address || "",
    city: data.personalInfo?.city || "",
    state: data.personalInfo?.state || "",
    zipCode: data.personalInfo?.zipCode || "",
    occupation: data.personalInfo?.occupation || "",
    monthlyIncome: data.personalInfo?.monthlyIncome || "",
    familySize: data.personalInfo?.familySize || "",
    emergencyContact: data.personalInfo?.emergencyContact || "",
    emergencyPhone: data.personalInfo?.emergencyPhone || "",
    description: data.personalInfo?.description || "",
  });

  const handleChange = (field, value) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    onUpdate({ personalInfo: updatedData });
  };

  const handleNext = () => {
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone
    ) {
      onNext();
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Personal Information
        </h3>
        <p className="text-gray-600">
          Please provide your personal details for the application
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            placeholder="Enter your first name"
            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            placeholder="Enter your last name"
            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter your email"
            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="Enter your phone number"
            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleChange("dateOfBirth", e.target.value)}
            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select
            value={formData.gender}
            onValueChange={(value) => handleChange("gender", value)}
          >
            <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-blue-500">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
              <SelectItem value="prefer-not-to-say">
                Prefer not to say
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2 space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
            placeholder="Street address"
            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            placeholder="City"
            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            value={formData.state}
            onChange={(e) => handleChange("state", e.target.value)}
            placeholder="State"
            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="zipCode">Zip Code</Label>
          <Input
            id="zipCode"
            value={formData.zipCode}
            onChange={(e) => handleChange("zipCode", e.target.value)}
            placeholder="Zip code"
            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="occupation">Occupation</Label>
          <Input
            id="occupation"
            value={formData.occupation}
            onChange={(e) => handleChange("occupation", e.target.value)}
            placeholder="Your occupation"
            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="monthlyIncome">Monthly Income</Label>
          <Input
            id="monthlyIncome"
            value={formData.monthlyIncome}
            onChange={(e) => handleChange("monthlyIncome", e.target.value)}
            placeholder="Monthly income"
            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="familySize">Family Size</Label>
          <Input
            id="familySize"
            type="number"
            value={formData.familySize}
            onChange={(e) => handleChange("familySize", e.target.value)}
            placeholder="Number of family members"
            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
          <Input
            id="emergencyContact"
            value={formData.emergencyContact}
            onChange={(e) => handleChange("emergencyContact", e.target.value)}
            placeholder="Emergency contact name"
            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
          <Input
            id="emergencyPhone"
            value={formData.emergencyPhone}
            onChange={(e) => handleChange("emergencyPhone", e.target.value)}
            placeholder="Emergency contact phone"
            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-2 space-y-2">
          <Label htmlFor="description">Tell us about your situation</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="Please describe your current situation and why you need support..."
            rows={4}
            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button
          onClick={onPrev}
          variant="outline"
          className="px-8 py-3 border-2 border-gray-300 hover:border-gray-400 transition-all duration-300"
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.phone
          }
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
