import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { HeroStats } from "@/heroes/components/HeroStats";
import { useState } from "react";

type Tab = "all" | "favorites" | "heroes" | "villains";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Heroes Universe"
          description="Discover, explore and manage heroes and villains."
        />
        <CustomBreadcrumbs currentPage="Heroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              onClick={() => setActiveTab("favorites")}
              className="flex items-center gap-2"
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("villains")}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {/* Show all characters */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Show all Favorites */}
            <h1>Favorites!!!</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Show all Heroes */}
            <h1>Heroes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            {/* Show all Villains */}
            <h1>Villains</h1>
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  );
};
