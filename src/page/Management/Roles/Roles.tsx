import { Table } from "@/components/UI/table/Table";
import { GetAll } from "@/service/hooks/GetAll";
import { Person } from "@/page/Management/User/data";
import { useSelector } from "react-redux";
import type { RootState } from "@/service/context/app/store"


export const Roles = () => {

    const flatData: any[] = [];

    const { state } = GetAll<Person>("user/");
    const isLoad = useSelector((state: RootState) => state.store.isLoad)

    state?.map((user) => {
        flatData.push({ ...user, roles: user.roles.name })
    })


    return (
        <Table data={flatData} visible_fields={["id", "username", "roles", "email"]} load={isLoad} />
    )
}