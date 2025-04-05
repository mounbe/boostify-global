
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

const PublishPage = () => {
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [customDomain, setCustomDomain] = useState("boostexportsai.com");
  const navigate = useNavigate();

  const handlePublish = async () => {
    try {
      setIsPublishing(true);
      
      // Simulate the publication process
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Once completed, update state and show success message
      setIsPublished(true);
      toast.success("Projet publié avec succès!");
    } catch (error) {
      console.error("Erreur de publication:", error);
      toast.error("Échec de la publication. Veuillez réessayer.");
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Publier Votre Projet</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Prêt à mettre en ligne?</CardTitle>
          <CardDescription>
            La publication de votre projet le rendra accessible au public.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="mb-4">
            <label htmlFor="domain" className="block text-sm font-medium mb-1">Nom de domaine</label>
            <div className="flex items-center gap-2">
              <Input 
                type="text"
                id="domain"
                value={customDomain}
                onChange={(e) => setCustomDomain(e.target.value)}
                className="flex-1"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Un plan payant Lovable est requis pour connecter un domaine personnalisé.
            </p>
          </div>
          
          {isPublished ? (
            <div className="bg-green-50 p-4 rounded-md border border-green-200">
              <h3 className="text-green-800 font-medium mb-2">Publication réussie!</h3>
              <p className="text-green-700 mb-4">
                Votre projet est maintenant en ligne et accessible au public sur <span className="font-medium">{customDomain}</span>.
              </p>
              <Button onClick={() => navigate("/")} variant="outline">
                Retourner à la page d'accueil
              </Button>
            </div>
          ) : (
            <>
              <p>
                Cliquez sur le bouton ci-dessous pour publier votre projet automatiquement.
                Ce processus prend généralement quelques secondes.
              </p>
              <Button 
                onClick={handlePublish} 
                disabled={isPublishing}
                className="w-full"
              >
                {isPublishing ? "Publication en cours..." : "Publier maintenant"}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
      
      {isPublished && (
        <Card>
          <CardHeader>
            <CardTitle>Étapes suivantes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Votre projet est maintenant publié. Voici quelques étapes que vous pourriez vouloir suivre:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Connecter votre nom de domaine <strong>{customDomain}</strong> via les paramètres du projet</li>
              <li>Configurer les paramètres DNS chez votre registraire de domaine</li>
              <li>Ajouter des analyses pour suivre les interactions des visiteurs</li>
              <li>Continuer à améliorer votre site</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200 mt-4">
              <h3 className="text-blue-800 font-medium mb-2">Configuration de domaine personnalisé</h3>
              <p className="text-blue-700 mb-2">
                Pour connecter votre domaine personnalisé {customDomain}:
              </p>
              <ol className="list-decimal pl-5 space-y-1 text-blue-700">
                <li>Allez dans Projet &gt; Paramètres &gt; Domaines dans Lovable</li>
                <li>Ajoutez votre domaine personnalisé</li>
                <li>Suivez les instructions pour configurer vos enregistrements DNS</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PublishPage;
