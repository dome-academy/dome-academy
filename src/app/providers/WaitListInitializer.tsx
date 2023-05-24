"use client";
import { useWaitlistStore } from "@/store/waitlistStore";
import { useRef } from "react";

const WaitListInitializer = ({
  email,
  showModal,
}: {
  email: string;
  showModal: boolean;
}) => {
  const initialized = useRef(false);
  if (!initialized.current) {
    useWaitlistStore.setState({ email, showModal });
  }
  return null;
};

export default WaitListInitializer;
