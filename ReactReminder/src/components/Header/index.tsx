import { useState } from "react";
import { Button } from "../Button";
import { Logo } from "../Logo";
import { NewStickyModal } from "../NewStickyModal";
import { Container } from "./styles";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <Container>
      <Logo />
      <Button title="Adicionar Lembrete" click={() => handleOpenModal()} />
      <NewStickyModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </Container>
  );
}
