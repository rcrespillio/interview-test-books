"use client";

import BooksList from "@/components/books-list";
import SearchBar from "@/components/search-bar";
import Spinner from "@/components/spinner";
import React, { useState } from "react";
import useFetch from "react-fetch-hook";
import createTrigger from "react-use-trigger";
import useTrigger from "react-use-trigger/useTrigger";

import { Routes, Route, useNavigate } from "react-router-dom";
import BookDetail from "../book-detail";

const requestBooks = createTrigger();

export default function MainPage() {
  const requestTriggerValue = useTrigger(requestBooks);

  const [q, setQ] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const navigator = useNavigate();

  const {
    isLoading,
    data: booksRes,
    error,
  } = useFetch<{ results: any[] }>(
    `/api/books${searchParam ? `?q=${searchParam}` : ""}`,
    { depends: [requestTriggerValue, searchParam] }
  );

  const onSubmit = () => {
    navigator('/')
    setSearchParam(`${q}`);
  };

  return (
    <main className="min-h-screen p-24">
        <SearchBar text={q} onChange={setQ} onSubmit={onSubmit} />

        <Routes>
          <Route path="/book/works/:key" element={<BookDetail />} />
          <Route
            path="/"
            element={
              <>
                {isLoading && <Spinner />}
                {!isLoading && <BooksList books={booksRes?.results} />}
              </>
            }
          />
        </Routes>
    </main>
  );
}
