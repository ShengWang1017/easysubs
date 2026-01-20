export type TAditionalData = {
  context?: string;
  partOfSpeech?: string;
  sentence?: string;
};
interface ILearningService {
  color: string;
  addWord: (word: string, translation: string, aditionalData: TAditionalData) => Promise<string>;
}

export default ILearningService;
