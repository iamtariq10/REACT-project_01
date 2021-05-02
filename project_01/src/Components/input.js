import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import ButtonPrimary from "./btnPrimary";
import ButtonSecondary from "./btnSecondary";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";
import { TrendingUpRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "40ch",
      },
    },
  })
);

export default function BasicTextFields() {
  const classes = useStyles();
  const [Data, setData] = useState([]);
  const [Name, setName] = useState();
  const [Roll, setRoll] = useState();
  const [Course, setCourse] = useState();
  const [Position, setPosition] = useState(0);
  const [Btn, setBtn] = useState(true);

  const del = (index) => {
    const deleted = Data.filter((value, i) => {
      return index !== i;
    });
    setData(deleted);
  };

  const edit = (value, index) => {
    setBtn(false);
    setPosition(index);
    setName(value.name);
    setRoll(value.rollno);
    setCourse(value.course);
  };
  const update = () => {
    setBtn(true);
    if ((Name !== "", Roll !== "", Course !== "")) {
      const obj = {
        name: Name,
        rollno: Roll,
        course: Course,
      };
      let updateStudent = Data.map((val, index) => {
        if (index === Position) {
          return obj;
        } else {
          return val;
        }
      });
      setData([...updateStudent]);
      setName("");
      setRoll("");
      setCourse("");
    } else {
      alert("Enter Your Details");
    }
  };

  const submit = () => {
    if ((Name !== "", Roll !== "", Course !== "")) {
      setName("");
      setRoll("");
      setCourse("");
      const obj = {
        name: Name,
        rollno: Roll,
        course: Course,
      };

      setData([...Data, obj]);
    } else {
      alert("Enter Your Details");
    }
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Name"
          required
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Roll"
          required
          value={Roll}
          onChange={(e) => {
            setRoll(e.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Course"
          required
          value={Course}
          onChange={(e) => {
            setCourse(e.target.value);
          }}
        />
        {Btn === true ? (
          <Button
            className="B"
            variant="contained"
            color="primary"
            onClick={submit}
          >
            Add Users
          </Button>
        ) : (
          <Button
            className="B"
            variant="contained"
            color="primary"
            onClick={update}
          >
            Update
          </Button>
        )}
      </form>
      <Table className="table">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>NAME</Th>
            <Th>ROLL</Th>
            <Th>COURSE</Th>
            <Th>Action</Th>
          </Tr>
       
        </Thead>
        <Tbody>
          {Data.map((value, index) => {
            return (
              <>
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{value.name}</Td>
                  <Td>{value.rollno}</Td>
                  <Td>{value.course}</Td>
                  <Td>
                    <EditIcon
                      className="IconsFocus"
                      onClick={() => {
                        edit(value, index);
                      }}
                    />
                    <DeleteIcon
                      onClick={() => {
                        del(index);
                      }}
                      className="IconsFocus"
                    />
                  </Td>
                </Tr>
              </>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
}
