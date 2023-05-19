"use client";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "@/components/main-page";

export default function Home() {
  return (
      <Router>
        <MainPage />
      </Router>
  );
}
