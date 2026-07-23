"use client";
import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";


const DeleteBtn = ({room}) => {

    const {_id} = room;
    const router = useRouter();

    const handleDelete = async() =>{
        const res = await fetch(`http://localhost:5000/rooms/${_id}`,{
            method : "DELETE",
            headers : {
                'content-type' : 'application/json',
            }
        });

        if(res.ok){
            const data = res.json();
            router.push('/all-rooms');
            alert("Destination updated successfully!");
        }
    }

 return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete this <strong>room</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteBtn;