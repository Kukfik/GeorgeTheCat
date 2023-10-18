from dotenv import load_dotenv
load_dotenv()   

from langchain.chat_models import ChatOpenAI
llm = ChatOpenAI()
