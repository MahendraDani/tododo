import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogRoot, AlertDialogTitle, AlertDialogTrigger, Button, Flex } from "@radix-ui/themes"

export const LogoutAlertDialog = () => {
  return (
    <AlertDialogRoot>
      <AlertDialogTrigger>
        <Button value='surface' type="button" className="cursour-pointer">
          Logout
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent style={{ maxWidth: 450 }}>
        <AlertDialogTitle>Logout</AlertDialogTitle>
        <AlertDialogDescription size="2">
          Do you really want to logout
        </AlertDialogDescription>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialogCancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction>
            <Button variant="solid" color="red" className="cursor-pointer">
              <LogoutLink>Logout</LogoutLink>
            </Button>

          </AlertDialogAction>
        </Flex>
      </AlertDialogContent>
    </AlertDialogRoot>
  )
}