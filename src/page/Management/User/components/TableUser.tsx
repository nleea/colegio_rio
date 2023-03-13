import { useState, useEffect } from "react";
import { Table } from "@/components/UI/table/table2";
import { PostFetch } from "@/service/hooks/modules/PostData";
import { ViewModal } from "@/components/UI/modal/Modal";

function TableUser() {

    const [open, setOpen] = useState(false);
    const [openModalAdd, setOpenAddmodal] = useState(false);
    const { fetch, data } = PostFetch();

    useEffect(() => {
        fetch("user", { type: "Estudiante", is: true })
    }, [])

    const closeHandler = () => {
        setOpen(false);
        setOpenAddmodal(false);
    }

    return (

        <>
            <Table visible_fields={[{ header: "id", access: "id" }, { header: "username", access: "username" }, { header: "email", access: "email" }, { header: "roles", access: "roles" }]}
                data={data} />

            <ViewModal closeHandler={closeHandler} open={open}   >

            </ViewModal>
        </>

    );
}

export { TableUser };
