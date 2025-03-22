// Type declarations for Onboarding step components

declare module './JoinCommunity' {
  interface JoinCommunityProps {
    onComplete: () => void;
  }
  
  const JoinCommunity: React.FC<JoinCommunityProps>;
  export default JoinCommunity;
}

declare module './KnowledgeExam' {
  interface KnowledgeExamProps {
    onComplete: (score: number, passed: boolean, answers: Record<string, string>) => void;
  }
  
  const KnowledgeExam: React.FC<KnowledgeExamProps>;
  export default KnowledgeExam;
}

declare module './NFTIDMinting' {
  interface NFTIDMintingProps {
    examScore: number;
    redirectToDashboard?: string;
  }
  
  const NFTIDMinting: React.FC<NFTIDMintingProps>;
  export default NFTIDMinting;
}
