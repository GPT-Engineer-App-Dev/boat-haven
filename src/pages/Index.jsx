import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center text-4xl font-bold">Welcome to Boat Adventures</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <AspectRatio ratio={16 / 9}>
            <img
              src="/images/boat.jpg"
              alt="Boat"
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <Separator />
          <p className="text-center text-lg">
            Discover the best boat adventures around the world. Join us for an unforgettable experience on the water.
          </p>
          <div className="flex justify-center">
            <Button variant="outline">Learn More</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;