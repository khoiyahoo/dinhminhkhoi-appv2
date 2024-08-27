import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SUMMARY_ABOUT_ME, SUMMARY_EXPERIENCE } from "@/constants/dummy";
import { ETab } from "@/enum/common";
import Typography from "@/myComponents/Typography";

export function TabsMenu() {
  return (
    <Tabs defaultValue={ETab.MAIN_SKILLS} className="w-full">
      <TabsList className="grid w-full grid-cols-3 shadow-lg">
        <TabsTrigger value={ETab.MAIN_SKILLS}>Main skills</TabsTrigger>
        <TabsTrigger value={ETab.EXPERIENCE}>Experience</TabsTrigger>
        <TabsTrigger value={ETab.EDUCATION}>Education</TabsTrigger>
      </TabsList>
      <TabsContent
        value={ETab.MAIN_SKILLS}
        className="shadow-lg rounded-[0.5rem]"
      >
        <Card>
          <CardHeader>
            <CardTitle>Main skills</CardTitle>
            <CardDescription>
              A few skills stand out and I often use them at work
            </CardDescription>
            <Separator />
          </CardHeader>
          <CardContent className="space-y-2">
            {SUMMARY_ABOUT_ME.map((item, index) => (
              <div className="flex gap-2 items-center" key={index}>
                <Typography size="normal" type="bold" variant="p">
                  {item.title}
                </Typography>
                <CardDescription className="text-[12px] mt-[2px]">
                  {item.subtitle}
                </CardDescription>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent
        value={ETab.EXPERIENCE}
        className="shadow-lg rounded-[0.5rem]"
      >
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
            <CardDescription>
              My experience before and after graduation
            </CardDescription>
            <Separator />
          </CardHeader>
          <CardContent className="space-y-2">
            {SUMMARY_EXPERIENCE.map((item, index) => (
              <div className="flex gap-2 items-center" key={index}>
                <Typography size="normal" type="bold" variant="p">
                  {item.title}
                </Typography>
                <CardDescription className="text-[12px] mt-[2px]">
                  {item.subtitle}
                </CardDescription>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent
        value={ETab.EDUCATION}
        className="shadow-lg rounded-[0.5rem]"
      >
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
            <CardDescription>The university I studied</CardDescription>
            <Separator />
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex gap-2 items-center">
              <Typography size="normal" type="bold" variant="p">
                HCMC University of Technology and Education
              </Typography>
              <CardDescription className="text-[12px] mt-[2px]">
                Information of Technological
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
