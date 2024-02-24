import React, { useState } from "react";
import WebVTT from "node-webvtt";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import { parse } from "postcss";
import { TiDelete } from "react-icons/ti";
import { MdOutlineEdit } from "react-icons/md";
const SubGen = () => {
  const [subtitles, setSubtitles] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [subtitleText, setSubtitleText] = useState("");

  const [changeButton, setChangeButton] = useState(true);
  const [editedItem, setEditedItem] = useState(null);

  const handleStartTimeChange = (selectedTime) => {
    const formattedTime = moment(selectedTime).format("HH:mm:ss");
    setStartTime(formattedTime);
  };

  const handleEndTimeChange = (selectedTime) => {
    const formattedTime = moment(selectedTime).format("HH:mm:ss");
    setEndTime(formattedTime);
  };

  const handleSubtitleTextChange = (event) => {
    setSubtitleText(event.target.value);
  };

  const convertToSeconds = (timeString) => {
    const timeParts = timeString.split(":");
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    const seconds = parseInt(timeParts[2], 10);

    return hours * 3600 + minutes * 60 + seconds;
  };

  const convertSecondsToTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    return formattedTime;
  };

  const handleAddSubtitle = () => {
    const newSubtitle = {
      startTime: convertToSeconds(startTime),
      endTime: convertToSeconds(endTime),
      text: subtitleText,
    };

    setSubtitles([...subtitles, newSubtitle]);
    setStartTime(endTime);
    setEndTime(endTime);
  };

  const handleGenerateSubtitleFile = () => {
    const parseSubtitles = {
      cues: [],
      valid: true,
    };

    if (subtitles) {
      subtitles.forEach((subtitle, index) => {
        const cue = {
          identifier: (index + 1).toString(),
          start: subtitle.startTime,
          end: subtitle.endTime,
          text: subtitle.text,
          styles: "",
        };
        parseSubtitles.cues.push(cue);
      });
      const modifiedSubtitleContent = WebVTT.compile(parseSubtitles);
      const modifiedSubtitleBlob = new Blob([modifiedSubtitleContent], {
        type: "text/vtt",
      });

      const downloadLink = URL.createObjectURL(modifiedSubtitleBlob);
      const a = document.createElement("a");
      a.href = downloadLink;
      a.download = "Subtitle.vtt";
      a.click();
    } else {
      console.error("No subtitles available");
    }
  };
  const handleEdit = (id) => {
    let editItem = subtitles.find((item, index) => {
      if (index === id) {
        return item;
      }
    })
    let startTime = convertSecondsToTime(editItem.startTime);
    let endTime = convertSecondsToTime(editItem.endTime)
    
    setSubtitleText(editItem.text);
    setStartTime(startTime);
    setEndTime(endTime);
    
    setChangeButton(false);
    setEditedItem(id);

  }
  const handleEditedItem = () => {
    setSubtitles(
      subtitles.map((subtitle, index) => {
        if(index === editedItem){
          return {...subtitle, startTime:convertToSeconds(startTime), endTime:convertToSeconds(endTime),  text: subtitleText};
        }
        return subtitle;
      })
    )
    
    setChangeButton(true);
    setSubtitleText("")
  }
  const handleDelete = (id) => {
    setSubtitles((items) => {
      return items.filter((arr, index) => {
        return index != id;
      })
    })
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="text-3xl font-bold">Subtitle Generator</div>
        <div>
          <div>
            <label className="text-bold">Start Time</label>
            <DateTime
              className="border rounded p-2"
              value={startTime}
              onChange={handleStartTimeChange}
              dateFormat={false}
              timeFormat="HH:mm:ss"
            />
          </div>
          <div>
            <label className="text-bold">End Time</label>
            <DateTime
              className="border rounded p-2"
              value={endTime}
              onChange={handleEndTimeChange}
              dateFormat={false}
              timeFormat="HH:mm:ss"
            />
          </div>
          <label className="font-bold block"> Subtitles :</label>
          <textarea
            className="border rounded p-2 w-full"
            rows={4}
            cols={30}
            placeholder="Write Captions in the Timespan..."
            value={subtitleText}
            onChange={handleSubtitleTextChange}
          />
          {
            changeButton ?
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 transition duration-300"
                onClick={handleAddSubtitle}
              >
                Add Subtitle
              </button> :
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 transition duration-300"
                onClick={handleEditedItem}
              >
                Submit changes
              </button>
          }
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">Subtitles :</h2>
          {subtitles.map((subtitle, index) => (
            <div key={index} className="flex">
              <p className="font-bold w-80 max-w-3/4">
                [{convertSecondsToTime(subtitle.startTime)} -{" "}
                {convertSecondsToTime(subtitle.endTime)}] : {subtitle.text}
              </p>
              <button
                className="ml-6 text-2xl"
                onClick={() => handleEdit(index)}
              >
                <MdOutlineEdit />
              </button>
              <button
                className="text-2xl"
                onClick={() => handleDelete(index)}
              ><TiDelete />
              </button>
            </div>
          ))}
        </div>
        {subtitles.length > 0 && (
          <div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mt-4"
              onClick={handleGenerateSubtitleFile}
            >
              Download Subtitles File
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubGen;
