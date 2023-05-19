"use client";

import Spinner from "@/components/spinner";
import React from "react";
import useFetch from "react-fetch-hook";
import createTrigger from "react-use-trigger";

import { Routes, Route, useNavigate, useParams, Link } from "react-router-dom";

const requestBooks = createTrigger();

export default function BookDetail() {
  const { key } = useParams();

  const navigator = useNavigate();

  const {
    isLoading,
    data,
    error,
  } = useFetch<any>(`/api/works/${key}`, { depends: [key] });

  const {
    isLoading: isLoadingAuthors,
    data: dataAuthors,
    error: errorAuthors,
  } = useFetch<any>(`/api/authors?keys=${data?.authors?.map((a:any)=>a?.author?.key.split('/authors/')[1]).join(',')}`, { depends: [data?.authors] });

  return (
    <main className="min-h-screen px-12">
      <Link to={`/`}>Go back</Link>
      <div
        className={`max-w rounded overflow-hidden shadow-lg w-full m-1 mt-8`}
      >
        {isLoading && <div className="px-6 pt-4 pb-2 h-24"><Spinner /></div>}
        {!isLoading && <>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data.title}</div>
            <p className="text-gray-700 text-base">Authors:</p>
            {isLoadingAuthors && <>Loading authors info...</>}
            {!isLoadingAuthors && <>{dataAuthors?.map((author: any) => (<p key={author.key} className="text-gray-700 text-base">{author.name}</p>))}
            </>}
            <br />
            <p className="text-gray-700 text-base">Latest revision: {data.latestRevision}</p>
            <p className="text-gray-700 text-base">Revision: {data.revision}</p>
            <br />
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {data.key}
            </span>
          </div>
        </>}
      </div>
    </main>
  );
}
