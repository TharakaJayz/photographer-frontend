import React from "react";
import { useForm } from "react-hook-form";
import WeddingForm, { ContactFormWeddingsType } from "./WeddingForm";
import EngagementForm, { ContactFormEngagementType } from "./EngagementForm";
import PreShootForm, { ContactFormPreShootType } from "./PreShootForm";

interface Props {
  formType: "Engagements" | "Weddings" | "Pre-shoots";
}

const QuoteForm = (props: Props) => {
  const formHandler = (
    formData: ContactFormWeddingsType | ContactFormEngagementType | ContactFormPreShootType
  ) => {
    console.log("this is submitted data from callback in parent", formData);
  };

  return (
    <div className="w-full flex justify-center items-center">
      {props.formType === "Weddings" && (
        <WeddingForm onSubmitCallback={formHandler} />
      )}

      {props.formType === "Engagements" && (
        <EngagementForm onSubmitCallback={formHandler} />
      )}

      {props.formType === "Pre-shoots" && (
        <PreShootForm onSubmitCallback={formHandler} />
      )}
    </div>
  );
};

export default QuoteForm;
