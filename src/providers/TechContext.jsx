import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const [techList, setTechList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const [editing, setEditing] = useState(null);
    const token = localStorage.getItem("@TOKEN");


    useEffect(() => {
        const getTechs = async () => {
            try {
                const { data } = await api.get(`/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setTechList(data.techs)
            } catch (error) {
                console.log(error)
            }
        }
        getTechs();
    }, []);

    const techCreate = async (formData) => {
        try {
            const newTech = { ...formData, }

            const token = localStorage.getItem("@TOKEN");

            const { data } = await api.post("/users/techs", newTech, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTechList([...techList, data]);
            setIsOpen(false);
        } catch (error) {
            console.log(error)
        }
    };

    const techDelete = async (deletingId) => {
        try {
            await api.delete(`/users/techs/${deletingId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const newTechList = techList.filter(tech => tech.id !== deletingId);
            setTechList(newTechList);
        } catch (error) {
            console.log(error)
        }
    };

    const techEdit = async (formData) => {
        try {
            const { data } = await api.put(`/users/techs/${editing.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            )

            const newList = techList.map((list) => {
                if (list.id === editing.id) {
                    return data
                } else {
                    return list
                }
            })
            setTechList(newList)
            setEditing(null)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TechContext.Provider value={{ techList, techCreate, isOpen, setIsOpen, techDelete, setEditing, editing, techEdit }}>
            {children}
        </TechContext.Provider>
    )
}