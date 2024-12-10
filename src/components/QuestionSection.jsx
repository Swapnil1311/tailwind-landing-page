import React, { useState } from "react";
import { SingleQuestion } from "./SingleQuestion";
import { data } from "../utils/questions";

export const QuestionSection = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="mx-auto px-6 py-12 max-w-7xl mt-8 lg:mt-16 lg:px-8">
      <h2 className="mb-12 text-5xl font-semibold leading-tight text-left text-gray-900 sm:font-semibold">
        FAQs
      </h2>
      <dl className="gap-x-6 gap-y-6 md:columns-2">
        {questions.map((question) => (
          <div
            key={question.id}
            className="group mb-4 break-inside-avoid rounded-xl border border-gray-200 bg-gray-50 p-6"
          >
            <SingleQuestion {...question} />
          </div>
        ))}
      </dl>
    </div>
  );
};
