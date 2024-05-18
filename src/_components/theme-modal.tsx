"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ThemeSwitcher from "./theme-switcher";
import { FaPaintbrush } from "react-icons/fa6";

type ThemeModalProps = {};

export default function ThemeModal({}: ThemeModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        className="fixed bottom-0 right-0 m-5 w-fit z-50 bg-primary text-white p-3 rounded-lg"
        onClick={onOpen}
      >
        <FaPaintbrush className="w-6 h-6" />
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-center flex-col gap-1 pt-10">
                მოარგე თემა შენს სტილს
              </ModalHeader>
              <ModalBody className="text-center flex items-center flex-col pb-10">
                <ThemeSwitcher />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
