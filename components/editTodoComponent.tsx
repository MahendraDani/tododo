import { DialogRoot, DialogTrigger, DialogClose, DialogContent, DialogDescription, DialogTitle, Flex, Heading, Text, TextFieldRoot, TextFieldInput, TextArea, SelectRoot, SelectTrigger, SelectContent, SelectGroup, SelectItem, Button } from "@radix-ui/themes";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { EditTodoAction } from "@/actions/editTodoAction";

interface EditTodoComponentProps {
  id: string;
  title: string;
  description: string;
  completed: string;
}
export const EditTodoComponent = ({ id, title, description, completed }: EditTodoComponentProps) => {
  return (
    <DialogRoot>
      <DialogTrigger>
        <button><Pencil1Icon /></button>
      </DialogTrigger>
      <DialogContent style={{ maxWidth: 450 }}>
        <DialogTitle size={'3'}>Edit Todo</DialogTitle>
        <DialogDescription size={'2'} mb='4'>
          Make changes to your todo.
        </DialogDescription>
        <form action={EditTodoAction}>
          <Flex align='start' justify='between' gap='4' direction='column' className="sm:min-w-[25rem] min-w-[16rem] rounded-md">
            <Flex align='start' justify='between' gap='1' direction='column' className="w-full">
              <Text as="label" size={'2'} weight='light'>Title</Text>
              <TextFieldRoot className="w-full">
                <TextFieldInput name="title" placeholder="Sports" radius="large" size='2' defaultValue={title} />
              </TextFieldRoot>
            </Flex>
            <Flex align='start' justify='between' gap='1' direction='column' className="w-full">
              <Text as="label" size={'2'} weight={'light'}>Description</Text>
              <TextArea name="description" defaultValue={description} placeholder="Play football ...." className="w-full" />
            </Flex>
            <Flex align='start' justify='between' gap='1' direction='column' className="w-full">
              <Text as="label" size={'2'} weight={'light'}>Status</Text>
              <div className="w-full">
                <SelectRoot name="completed" defaultValue={completed} >
                  <SelectTrigger radius="large" className="w-full" />
                  <SelectContent variant="soft">
                    <SelectGroup>
                      <SelectItem value={"todo"}>Todo</SelectItem>
                      <SelectItem value="done">Done</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectRoot>
              </div>
              <div className="hidden">
                <input name="id" value={id} />
              </div>
            </Flex>
            <Flex className="w-full" justify={'end'} align={'end'} gap={'3'} >
              <DialogClose>
                <button className="p-1 min-w-16 rounded-full border-[1px] bg-red-50 border-red-100 hover:bg-red-100 ease-in duration-200" type="submit">Edit</button>
              </DialogClose>
            </Flex>
          </Flex>
        </form>
      </DialogContent>
    </DialogRoot>
  )
}