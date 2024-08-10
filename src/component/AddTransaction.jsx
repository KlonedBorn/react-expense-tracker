import React, { useContext, useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { TransactionContext } from "../context/transaction";

export default function AddTransaction() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0.0);
  const { addTransaction } = useContext(TransactionContext);

  const handleTransactionSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      description,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  const handleTextChange = (e) => setDescription(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);
  return (
    <Stack direction="vertical" className="">
      <h3>Add new transaction</h3>
      <Form
        onSubmit={handleTransactionSubmit}
        className="d-flex flex-column gap-2"
      >
        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Control
          type="description"
          value={description}
          onChange={handleTextChange}
          placeholder="Enter transaction..."
          className="p-2"
        />
        <Form.Group>
          <Form.Label htmlFor="amount">
            Amount <br />
            (negative - expense, positive-income)
          </Form.Label>
          <Form.Control
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount..."
          />
        </Form.Group>
        <Button type="submit">Add transaction</Button>
      </Form>
    </Stack>
  );
}
