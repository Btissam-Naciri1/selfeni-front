import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import axios from "axios";

export default function Formulaire() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [loan_amount, setAmount] = useState();
  const [loan_amount_term, setDuration] = useState();
  const [monthlyPayment, setMonthlyPayment] = useState(469.4);

  const [formData, setFormData] = useState({
    gender: "Male",
    married: "Yes",
    dependents: "1",
    education: "Graduate",
    selfEmployed: "No",
    income: 5000,
    coapplicantIncome: 2000,
    loanAmount: loan_amount,
    loanAmountTerm: loan_amount_term,
    creditHistory: 1.0,
    propertyArea: "Urban",
  });
  
  

  const calculateMonthlyPayment = (loan_amount, loan_amount_term) => {
    const rate = 0.05; // Example 5% annual interest rate
    const monthlyRate = rate / 12;
    const payment = (loan_amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loan_amount_term));
    setMonthlyPayment(payment.toFixed(2));
  };
  const validateFormData = () => {
    const { gender, married, dependents, education, selfEmployed, income, coapplicantIncome, loanAmount, loanAmountTerm, creditHistory, propertyArea } = formData;

    if (!gender || !married || !dependents || !education || !selfEmployed || !propertyArea || !income ||!loanAmount || !loanAmountTerm) {
      alert("Please fill all the required fields.");
      return false;
    }

    if (loanAmount <= 0 || loanAmountTerm <= 0 || creditHistory < 0) {
      alert("Loan amount, term, and credit history must be valid.");
      return false;
    }

    return true;
  };
  
  
  
  const refreshToken = async () => {
    const refreshToken = localStorage.getItem("refresh_token");
    if (!refreshToken) {
      alert("Session expired. Please log in again.");
      localStorage.clear();
      window.location.href = "/login";
      return null;
    }
    try {
      const refreshResponse = await axios.post(
        "http://127.0.0.1:8000/api/token/refresh/",
        { refresh: refreshToken }
      );
      localStorage.setItem("access_token", refreshResponse.data.access);
      return refreshResponse.data.access;
    } catch (error) {
      console.error("Error refreshing token:", error);
      alert("Session expired. Please log in again.");
      localStorage.clear();
      window.location.href = "/login";
      return null;
    }
  };

  const handleNextStep = async () => {
    if (step < 3) {
      try {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          alert("You need to be logged in.");
          return;
        }

        const response = await axios.post(
          "http://127.0.0.1:8000/api/credits/",
          {
            montant_demande: loan_amount,
            duree: loan_amount_term,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setStep(step + 1);
      } catch (error) {
        if (error.response?.status === 401) {
          const newToken = await refreshToken();
          if (newToken) handleNextStep(); // Retry
        } else {
          console.error("Error:", error);
        }
      }
    }
  };

  const handlePreviousStep = () => setStep(step - 1);
  const handleValidation = async () => {
    if (!validateFormData()) return;
  
    try {
      const payload = {
        Gender: formData.gender,
        Married: formData.married,
        Dependents: formData.dependents,
        Education: formData.education,
        SelfEmployed: formData.selfEmployed,
        ApplicantIncome: parseFloat(formData.income || 0),
        CoapplicantIncome: parseFloat(formData.coapplicantIncome || 0),
        LoanAmount: parseFloat(formData.loanAmount || 0),
        Loan_Amount_Term: parseInt(formData.loanAmountTerm || 0),
        Credit_History: parseFloat(formData.creditHistory || 0),
        Property_Area: formData.propertyArea,
      };

      console.log("Payload:", payload);
      const response = await axios.post(
        "http://127.0.0.1:8000/ml_integration/predict-loan-status/add",
        payload
      );
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error.response?.data || error.message);
    }
  };    
  

  return (
    <>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:py-24">
        {step === 1 && (
          <Step1
            loan_amount={loan_amount}
            loan_amount_term={loan_amount_term}
            monthlyPayment={monthlyPayment}
            calculateMonthlyPayment={calculateMonthlyPayment}
            handleNextStep={handleNextStep}
            setAmount={setAmount}
            setDuration={setDuration}
          />
        )}
        {step === 2 && (
          <Step2
            handlePreviousStep={handlePreviousStep}
            handleNextStep={handleNextStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step === 3 && (
          <Step3
            handlePreviousStep={handlePreviousStep}
            handleValidation={handleValidation}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </main>
      <Footer mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </>
  );
}
