import React, { useEffect, useState } from "react";
import '../index.css';
import HomeButton from "./HomeButton";
import { Card, Col, Container, Row, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";

function Dashboard() {
    const [showModal, setShowModal] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
  
    const openModal = (data) => {
      setSelectedData(data);
      setShowModal(true);
    };
  
    const closeModal = () => {
      setSelectedData(null);
      setShowModal(false);
    };
    const [data, setData] = useState(null);
    useEffect(() => {
        // Define the API endpoint URL
        const apiUrl = 'http://universities.hipolabs.com/search?country=Indonesia';
    
        // Use the fetch function to make the API request
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setData(data); // Set the fetched data to your state
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
      let numbs = 0;
  return (
    <div style={{maxWidth: '720px', margin: 'auto', overflow: 'hidden'}}>
          {/* <HomeButton /> */}
        <div style={{margin: 'auto'}}>
            <p data-aos="fade-right" data-aos-duration="1000" style={{maxWidth: '310px', margin: 'auto', margin: '0 0 1rem 0'}} className="titleP">Data Assigment Asuransi Astra</p>
        </div>
      {/* Can remove HomeButton, only purpose is to test redirect functionality */}
    
        <Container>
            <Row className="row1">
                <Col md={12}>
                    <Table dark={true}>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Nama Universitas
                                </th>
                                <th>
                                    Website
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {data?.length === 0 ? (
                                <div>Not Found</div>
                            ) : (
                                data?.map((b, index) => {
                                    numbs++;
                                    return(
                                        <tr>
                                        <th key={index.toString()} scope="row">
                                        {numbs}
                                        </th>
                                        <td>
                                            {/* {b.name} */}
                                            <button onClick={() => openModal(b)}>{b.name}</button>
                                        </td>
                                        <td>
                                            {b.web_pages}
                                        </td>
                                    </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </Table>
                    <Modal show={showModal} onHide={closeModal}>
                        <Modal.Header closeButton>
                        <Modal.Title>Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {selectedData && (
                            <div>
                            <p>ID: {selectedData.numbs || 1}</p>
                            <p>Nama Universitas: {selectedData.name}</p>
                            <p>Website: {selectedData.web_pages}</p>
                            <p>Domain: {selectedData.domains}</p>
                            </div>
                        )}
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Dashboard;
