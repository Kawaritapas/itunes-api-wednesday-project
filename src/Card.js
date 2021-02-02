import React from "react";
import { Button, Image, List } from "semantic-ui-react";
import { Modal } from "semantic-ui-react";

function Card(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <List divided verticalAlign="middle">
        <List.Item>
          <List.Content floated="right">
            <Button
              data-testid = "button"
              onClick={() => setOpen(true)}
              basic
              color="violet"
              style={{ marginTop: "20px" }}
            >
              More information
            </Button>
          </List.Content>
          <Image size={"tiny"} avatar src={props.song.artworkUrl100} />
          <List.Content>
            <audio controls>
              <source src={props.song.previewUrl}></source>
            </audio>
          </List.Content>
        </List.Item>
        <hr style={{ color: "pink" }}></hr>
      </List>

      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        color="black"
      >
        <Modal.Header>More information</Modal.Header>
        <Modal.Content image>
          <Image
            src={props.song.artworkUrl100}
            style={{ height: "100px" }}
            wrapped
          />
          <Modal.Description>
            <p style={{ fontSize: "15px", color: "blue" }}>
              Track name:{" "}
              <span style={{ color: "black" }}>{props.song.trackName}</span>
            </p>
            <p style={{ fontSize: "15px", color: "blue" }}>
              Artist name:{" "}
              <span style={{ color: "black" }}>{props.song.artistName}</span>
            </p>
            <p style={{ fontSize: "15px", color: "blue" }}>
              Track price:{" "}
              <span style={{ color: "black" }}>
                {props.song.trackPrice} {props.song.currency}
              </span>
            </p>
            <p style={{ fontSize: "15px", color: "blue" }}>
              Origin:{" "}
              <span style={{ color: "black" }}>{props.song.country}</span>
            </p>
            <p style={{ fontSize: "15px", color: "blue" }}>
              Genre:{" "}
              <span style={{ color: "black" }}>
                {props.song.primaryGenreName}
              </span>
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Close"
            labelPosition="right"
            icon="close"
            onClick={() => setOpen(false)}
            negative
          />
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  );
}

export default Card;
