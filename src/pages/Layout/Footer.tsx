import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Container, Row } from "react-bootstrap"

const Footer = ()=>{
    return (
        <Container>
            <Row className="text-center my-5">
                <Col xs={12} >
                    &copy; Criado por Fabricio Nascimento
                </Col>
                <Col xs={12} className="text-dark d-flex gap-5 justify-content-center my-5" >
                    <a href="https://www.linkedin.com/in/fabricio-nascimento-6439646b/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/Fabricioilha" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="http://fab-dev.surge.sh" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGlobe} size="2x" />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer