from dotenv import load_dotenv
load_dotenv()   

from langchain.chat_models import ChatOpenAI
llm = ChatOpenAI()
lang = "Korean"
x = input()
result = (f"correct my grammatical mistakes and typos. If there is nothing to correct cheer me up: '{x}'")
result = llm.predict(result)
answer = llm.predict(f"translate '{result}' to {lang}.")

print(answer)