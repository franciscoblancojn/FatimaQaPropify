import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Table, TableProps } from './index';

export default {
    component: Table,
    title: 'Table/Table',
} as Meta;

interface InterfaceTable {
    id: number
    name: string
    date: Date,
    user: {
        id: number
        name: string
    }

    status: "rentado" | "No rentado"
    tenant: { name: string }
    rent: number
    unitName: string
    squareFeets: string
    ownership: string
    state: string
    city: string
    address: string
    estructura:string
    zipCode: number






}

const Table_: Story<TableProps<InterfaceTable>> = (args) => <Table<InterfaceTable> {...args} />;
export const Primary = Table_.bind({});
Primary.args = {
    name: "Nombre de la Tabla",
    items: [
        {
            id: 1111,
            date: new Date(),
            name: "Jhon Doe",

            user: {
                id: 1111,
                name: "Jhon Doe",
            },
            tenant: {
                name: "Jhon Doe",


            },
            rent:2150,
            status:"rentado",
            address:"1743 Booxwood Lane",
            city:"Naples",
            ownership:"120 Sft",
            squareFeets:"120 Sft",
            state:"FL",
            estructura:"Apartment",
            unitName:"Naples House",
            zipCode:34105,

            


        },
        {
            id: 2222,
            date: new Date(),
            name: "Francisco Blanco",

            user: {
                id: 2222,
                name: "Francisco Blanco ",
            },
            tenant: {
                name: "Francisco Blanco",


            },
            rent:4500,
            status:"No rentado",
            address:"1743  Capacho",
            city:"San Cristobal",
            ownership:"120 Sft",
            squareFeets:"120 Sft",
            state:"FL",
            estructura:"Apartment",
            unitName:" Capacho-Libertad",
            zipCode:4567,
        },
        {
            id: 1111,
            date: new Date(),
            name: "Jhon Doe",

            user: {
                id: 1111,
                name: "Jhon Doe",
            },
            tenant: {
                name: "Jhon Doe",


            },
            rent:2150,
            status:"rentado",
            address:"1743 Booxwood Lane",
            city:"Naples",
            ownership:"120 Sft",
            squareFeets:"120 Sft",
            state:"FL",
            estructura:"Apartment",
            unitName:"Naples House",
            zipCode:34105,
        },
        {
            id: 2222,
            date: new Date(),
            name: "Francisco Blanco",

            user: {
                id: 2222,
                name: "Francisco Blanco ",
            },
            tenant: {
                name: "Francisco Blanco",


            },
            rent:4500,
            status:"No rentado",
            address:"1743  Capacho",
            city:"San Cristobal",
            ownership:"120 Sft",
            squareFeets:"120 Sft",
            state:"FL",
            estructura:"Apartment",
            unitName:" Capacho-Libertad",
            zipCode:4567,
        },      {
            id: 2222,
            date: new Date(),
            name: "Francisco Blanco",

            user: {
                id: 2222,
                name: "Francisco Blanco ",
            },
            tenant: {
                name: "Francisco Blanco",


            },
            rent:4500,
            status:"No rentado",
            address:"1743  Capacho",
            city:"San Cristobal",
            ownership:"120 Sft",
            squareFeets:"120 Sft",
            state:"FL",
            estructura:"Apartment",
            unitName:" Capacho-Libertad",
            zipCode:4567,
        },
        

    ],
    
    header: [
        {
            id: 'id',
            th: "ID",

        },
        {
            id: 'date',
            th: "date",
            parse: (data) => {
                return <>
                    {data.date.toDateString()}
                </>
            }
        },

        {
            id: 'status',
            th: "Status",


        },
          
        {
            id: 'tenant',
            th: "Tenant",
            parse: (data) => {
                return <>
                    {data.tenant.name}
                </>
            }

        },
        {
            id: 'rent',
            th: "Rent",

        },
        {
            id: 'unitName',
            th: "Unit Name",

        },
        {
            id: 'estructura',
            th: "Type",

        },
        {
            id: 'squareFeets',
            th: "Square Feets",

        },
        {
            id: 'squareFeets',
            th: "Square Feets",

        },
        {
            id: 'ownership',
            th: "Ownership",

        },



        {
            id: 'city',
            th: "City",

        },
       
        
        
      
       
     
        {
            id: 'address',
            th: "Address",

        },
        {
            id: 'zipCode',
            th: "Zip Code",

        },


    ],


} as TableProps<InterfaceTable>;
