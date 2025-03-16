import { Input, Container, Stack, Text, Button, Center} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTasks, addTask, toggleTask, deleteTask } from "../redux/actions"

export const TaskManager = () => {
    const [task, setTask] = useState("")
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks.tasks)
    const loading = useSelector(state => state.tasks.loading)
    const error = useSelector(state => state.tasks.error)

    useEffect(()=>{
        dispatch(fetchTasks())
    }, [dispatch])

    return (
        <Center minH="100vh">
            <Container maxW="md">
                <Stack spacing={4}>
                    <Text fontSize="2xl" fontWeight="bold">Task Manager App</Text>
                    <Input 
                        placeholder="Enter your text"
                        variant="flushed"
                        size="lg"
                        onChange={(e)=>{
                            setTask(e.target.value)
                        }}     
                        value={task}
                    />
                    <Button
                        size="lg"
                        variant="solid"
                        colorPalette={"blue"}
                        onClick={()=>{
                            if(task.trim()) {
                                dispatch(addTask({
                                    id: Date.now(),
                                    title: task,
                                    completed: false
                                }))
                                setTask("")
                            }
                        }}
                    >Add Task</Button>
                    {loading && <Text>loading...</Text>}
                    {error && <Text color="red">Error: {error}</Text>}

                    {tasks.map(task => (
                        <Stack key={task.id} direction="row" alignItems="center" spacing={4} p={2} borderWidth={1} borderRadius="md">
                            <Text 
                                flex="1"
                                textDecoration={task.completed?"line-through":"none"}
                            >
                                {task.title}
                            </Text>
                            <Button
                                variant="solid"
                                colorPalette={"red"}
                                size="sm"
                                onClick={()=>dispatch(deleteTask(task.id))}
                            >Remove</Button>
                            <Button
                                variant="solid"
                                colorPalette={"green"}
                                size="sm"
                                onClick={()=>dispatch(toggleTask(task.id))}
                            >
                                {task.completed? "Undo":"Completed"}
                            </Button>
                        </Stack>
                    ))}
                </Stack>
            </Container>
        </Center>
    )
}