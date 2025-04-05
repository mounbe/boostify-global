
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from "react-router-dom";

const PublishPage = () => {
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const navigate = useNavigate();

  const handlePublish = async () => {
    try {
      setIsPublishing(true);
      
      // Simulate the publication process
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Once completed, update state and show success message
      setIsPublished(true);
      toast.success("Project published successfully!");
    } catch (error) {
      console.error("Publication error:", error);
      toast.error("Failed to publish. Please try again.");
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Publish Your Project</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Ready to go live?</CardTitle>
          <CardDescription>
            Publishing your project will make it available to the public.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isPublished ? (
            <div className="bg-green-50 p-4 rounded-md border border-green-200">
              <h3 className="text-green-800 font-medium mb-2">Successfully Published!</h3>
              <p className="text-green-700 mb-4">
                Your project is now live and accessible to the public.
              </p>
              <Button onClick={() => navigate("/")} variant="outline">
                Return to Homepage
              </Button>
            </div>
          ) : (
            <>
              <p>
                Click the button below to publish your project automatically.
                This process typically takes a few seconds.
              </p>
              <Button 
                onClick={handlePublish} 
                disabled={isPublishing}
                className="w-full"
              >
                {isPublishing ? "Publishing..." : "Publish Now"}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
      
      {isPublished && (
        <Card>
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Your project is now published. Here are some things you might want to do next:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Share your project URL with others</li>
              <li>Add analytics to track visitor interactions</li>
              <li>Continue making improvements to your site</li>
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PublishPage;
