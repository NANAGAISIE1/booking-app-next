import { PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignUpButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="hidden rounded-full lg:flex text-dark hover:font-bold"
        >
          SignUp
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-dark border-0">
        <DialogHeader className="text-light">
          <DialogTitle>Get Started</DialogTitle>
          <DialogDescription className="text-primary">
            First Enter your phone number
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <Label htmlFor="tel" className="text-right">
              <PhoneCall />
            </Label>
            <Input
              id="tel"
              placeholdeer="(012) 345 6789"
              className="col-span-3 bg-bars border-0 text-white flex-grow"
              type="tel"
            />
          </div>
          <Button type="submit">Send</Button>
          <span className="text-center text-xs">
            By tapping &quot;Send&quot;, an SMS may be sent. Message & data
            rates may apply.
          </span>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
