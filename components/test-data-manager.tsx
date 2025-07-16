"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Database, Trash2, Plus, AlertTriangle } from "lucide-react";
import { generateTestData, clearTestData } from "@/scripts/generate-test-data";

export function TestDataManager() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
    error?: string;
  } | null>(null);

  const handleGenerateData = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await generateTestData();
      setResult({
        ...response,
        message: response.message ?? "Operation completed.",
      });
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        message: "Failed to generate test data",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClearData = async () => {
    if (
      !confirm(
        "Are you sure you want to clear all test data? This cannot be undone."
      )
    ) {
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await clearTestData();
      setResult({
        ...response,
        message: response.message ?? "Operation completed.",
      });
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        message: "Failed to clear test data",
      });
    } finally {
      setLoading(false);
    }
  };

  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <Card className="border-blue-200 bg-blue-50">
      <CardHeader>
        <CardTitle className="text-blue-900 flex items-center gap-2">
          <Database className="w-5 h-5" />
          Test Data Manager (Development Only)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-blue-800">
          Generate sample data to test the admin dashboard functionality, or
          clear existing test data.
        </p>

        <div className="flex gap-3">
          <Button
            onClick={handleGenerateData}
            disabled={loading}
            size="sm"
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            {loading ? "Generating..." : "Generate Test Data"}
          </Button>

          <Button
            onClick={handleClearData}
            disabled={loading}
            variant="destructive"
            size="sm"
            className="flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            {loading ? "Clearing..." : "Clear Test Data"}
          </Button>
        </div>

        {result && (
          <Alert variant={result.success ? "default" : "destructive"}>
            {!result.success && <AlertTriangle className="h-4 w-4" />}
            <AlertDescription>
              {result.error || result.message}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
