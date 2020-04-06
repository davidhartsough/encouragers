import React, { useState } from "react";
import Select from "react-select";
import Async from "react-select/async";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import PageLoader from "../../components/PageLoader";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ value: "steve123", label: "Steve" }]);
    }, 1000);
  });

export default function NewGroup() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [members, setMembers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const proceed = () => setStep(step + 1);
  function finish() {
    console.log(name, members, admins);
  }
  if (step === 1) {
    return (
      <Layout title="New Group">
        <div>
          <Header title="Create a group" />
          <FormField
            label="Name"
            placeholder="Group Name we will make it more spicy later you know"
            value={name}
            setValue={setName}
          />
          <Button label="Next" onClick={proceed} />
        </div>
      </Layout>
    );
  } else if (step === 2) {
    return (
      <Layout title="New Group">
        <div>
          <Header title="Add members" />
          <p>Pick people to join your group</p>
          <Async
            isMulti
            cacheOptions
            loadOptions={promiseOptions}
            values={members}
            onChange={setMembers}
          />
          <Button label="Next" onClick={proceed} />
        </div>
      </Layout>
    );
  } else if (step === 3) {
    return (
      <Layout title="New Group">
        <div>
          <Header title="Choose admins" />
          <p>Who else should be an admin?</p>
          <Select
            isMulti
            options={members}
            values={admins}
            onChange={setAdmins}
          />
          <Button label="Finish" onClick={finish} />
        </div>
      </Layout>
    );
  } else {
    return <PageLoader />;
  }
}
